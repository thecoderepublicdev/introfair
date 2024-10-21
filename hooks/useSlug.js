import { useState, useEffect } from 'react';

export default function useSlug(title) {
    const [slug, setSlug] = useState('');

    useEffect(() => {
        if (title) {
            const generatedSlug = title
                .toLowerCase()  // Convert to lowercase
                .trim()  // Remove leading/trailing spaces
                .replace(/[^a-z0-9 -]/g, '')  // Remove special characters
                .replace(/\s+/g, '-')  // Replace spaces with hyphens
                .replace(/-+/g, '-');  // Ensure no multiple hyphens
            setSlug(generatedSlug);
        } else {
            setSlug('');  // Set to empty if no title
        }
    }, [title]);

    return slug;
}