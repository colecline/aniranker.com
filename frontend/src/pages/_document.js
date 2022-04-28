import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render () {
        return (
            <Html lang="en">
                <Head />
                <body className="bg-gray-300 antialiased mx-auto items-center">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}