# Images Directory

This directory is for profile images and project screenshots (optional).

## Optional Enhancements

You can add:

- **Profile photo**: Add as `profile.jpg` or `profile.png`
- **Project screenshots**: Name them descriptively (e.g., `project-reporting-system.png`)

To use a profile image, add this to the About section in `index.html`:

```html
<div class="about-content">
    <img src="assets/images/profile.jpg" alt="Juan Diego Arce Castro" class="profile-image">
    <div class="about-text">
        <!-- existing content -->
    </div>
</div>
```

Then add CSS styling in `css/style.css`:

```css
.profile-image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: var(--space-4);
}
```

## Image Optimization Tips

- Use WebP format for best compression
- Keep file sizes under 200KB
- Use descriptive filenames
- Compress images before uploading
