/**
 * Header component displays navigation links and website logo.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Header component.
 */
function Header(): JSX.Element {
  return (
    <div className="fixed left-0 top-0 w-full flex flex-row items-center justify-between text-sm font-vazir backdrop-blur-sm z-10 px-4">
      <nav className=" flex justify-center items-center pb-6 pt-6 lg:static lg:w-auto gap-2 "></nav>
      <a href="https://asadheidari.ir/" target="_blank">
        <img src="/images/logo.png" alt="logo" width={100} height={24} />
      </a>
    </div>
  );
}

export default Header;
