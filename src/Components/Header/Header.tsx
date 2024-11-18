/**
 * Header component displays navigation links and website logo.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Header component.
 */
function Header(): JSX.Element {
  return (
    <div className="fixed left-0 top-0 w-full flex flex-row items-center justify-between text-sm font-vazir backdrop-blur-sm z-10 px-4">
      <nav className=" flex justify-center items-center pb-6 pt-6 lg:static lg:w-auto gap-4 ">
        <a
          className="text-black border-b-2 border-yellow-400 p-1 hover:bg-black hover:text-white"
          href="#about-me"
        >
          درباره من
        </a>
        <a
          href="/CV/CV.pdf"
          download="AsadollahHeidari.FrontEnd.En.Fa.CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="py-2 px-2 rounded-lg text-black bg-yellow-400">
            دانلود روزمه من
          </button>
        </a>
      </nav>
      <a href="https://asadheidari.ir/" target="_blank">
        <img src="/images/logo.png" alt="logo" width={100} height={24} />
      </a>
    </div>
  );
}

export default Header;
