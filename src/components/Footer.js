export default function Footer() {

    const cuurentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className="footer-text">
                © {cuurentYear} Moviedux, all rights reserved.
            </p>
        </footer>
    );
}