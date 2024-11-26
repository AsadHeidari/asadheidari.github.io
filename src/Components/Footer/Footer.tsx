/**
 * Footer component displays social media links and contact information.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Footer component.
 */
function Footer(): JSX.Element {
  return (
    <div className="mt-10 flex flex-col items-center mb-20 lg:mb-0">
      <div className="flex gap-5 justify-center">
        <a href="https://www.linkedin.com/in/asad-heidari-9197831b7/">
          <img
            className="text-gray-600 hover:text-none"
            src="/images/linkedin.svg"
            alt="arrow"
            width={100}
            height={100}
          />
        </a>
        <a href="https://github.com/AsadHeidari/">
          <img
            className="text-gray-600 hover:text-none"
            src="/images/github.svg"
            alt="arrow"
            width={100}
            height={100}
          />
        </a>
      </div>
      <a
        href="mailto:asadheidari86@gmail.com"
        className="text-xs text-gray-400 hover:text-white"
      >
        AsadHeidari86@gmail.com
      </a>
      <p className="mt-1"> &copy; 2023-{new Date().getFullYear()}</p>
    </div>
  );
}

export default Footer;
