import Header from "./Header";

export default function Layout({children}) {
    return (
        <>
        <Header />
        <main className="max-w-6xl mx-auto">{children}</main>
        </>
    )
}