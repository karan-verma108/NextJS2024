export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <h2>with inner layout</h2>
            {children}
        </>
    )
}