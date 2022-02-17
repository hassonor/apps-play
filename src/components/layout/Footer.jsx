import {ReactComponent as IronSourceLogo} from '../../assets/IronSource-logo.svg';

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className='footer p-3 bg-gray-700 text-primary-content footer-center'>
            <div>
                <IronSourceLogo/>
                <p> &copy; {currentYear} IronSource, Inc.</p>
            </div>
        </footer>
    )
}


export default Footer;