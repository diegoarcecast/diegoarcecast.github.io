// ==========================================================================
// Animated Background - Data Network Visualization
// ==========================================================================

(function () {
    const canvas = document.getElementById('background-canvas');
    const ctx = canvas.getContext('2d');

    let width, height;
    let nodes = [];
    let animationId;

    const config = {
        nodeCount: 50,
        nodeRadius: 2,
        connectionDistance: 150,
        nodeSpeed: 0.3,
        connectionOpacity: 0.15,
        nodeOpacity: 0.6
    };

    // Node class
    class Node {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * config.nodeSpeed;
            this.vy = (Math.random() - 0.5) * config.nodeSpeed;
            this.radius = config.nodeRadius;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;

            // Keep within bounds
            this.x = Math.max(0, Math.min(width, this.x));
            this.y = Math.max(0, Math.min(height, this.y));
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = getNodeColor();
            ctx.fill();
        }
    }

    // Get color based on theme
    function getNodeColor() {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            return `rgba(100, 120, 255, ${config.nodeOpacity})`;
        }
        return `rgba(70, 90, 200, ${config.nodeOpacity})`;
    }

    function getConnectionColor() {
        const theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            return `rgba(100, 120, 255, ${config.connectionOpacity})`;
        }
        return `rgba(70, 90, 200, ${config.connectionOpacity})`;
    }

    // Initialize canvas size
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    // Initialize nodes
    function init() {
        resize();
        nodes = [];

        for (let i = 0; i < config.nodeCount; i++) {
            nodes.push(new Node());
        }

        animate();
    }

    // Draw connections between nearby nodes
    function drawConnections() {
        const connectionColor = getConnectionColor();

        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const dx = nodes[i].x - nodes[j].x;
                const dy = nodes[i].y - nodes[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < config.connectionDistance) {
                    const opacity = (1 - distance / config.connectionDistance) * config.connectionOpacity;

                    ctx.beginPath();
                    ctx.moveTo(nodes[i].x, nodes[i].y);
                    ctx.lineTo(nodes[j].x, nodes[j].y);
                    ctx.strokeStyle = connectionColor.replace(
                        config.connectionOpacity.toString(),
                        opacity.toString()
                    );
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Update and draw nodes
        nodes.forEach(node => {
            node.update();
            node.draw();
        });

        // Draw connections
        drawConnections();

        animationId = requestAnimationFrame(animate);
    }

    // Handle window resize
    window.addEventListener('resize', () => {
        cancelAnimationFrame(animationId);
        init();
    });

    // Handle theme changes
    const observer = new MutationObserver(() => {
        // Colors will update on next frame automatically
    });

    observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
    });

    // Pause animation when tab is not visible (performance optimization)
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            cancelAnimationFrame(animationId);
        } else {
            animate();
        }
    });

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        // Initialize
        init();
    } else {
        // Static background for reduced motion
        resize();
        nodes = [];
        for (let i = 0; i < config.nodeCount; i++) {
            nodes.push(new Node());
        }
        nodes.forEach(node => node.draw());
    }
})();
