export const fetchCategories = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/getCategories`
    );

    const data = await response.json();
    const categories: Category[] = data.categories;

    return categories;
};
