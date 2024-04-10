export default function ProductsIdLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (<>
        <h2>Featues of the product</h2>
        {children}
    </>)
}