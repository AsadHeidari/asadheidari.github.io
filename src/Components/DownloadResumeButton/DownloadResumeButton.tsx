/**
 * DownloadResumeButton component
 *
 * Renders a button that downloads the user's resume when clicked.
 *
 * @returns {JSX.Element} The JSX element representing the download button
 */
function DownloadResumeButton(): JSX.Element {
  return (
    <a
      href="/CV/CV.pdf"
      download="AsadollahHeidari.FrontEnd.CV.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="my-20"
    >
      <button className="btn flex items-center justify-center gap-1 py-3 px-4 rounded-lg text-neutral-800  hover:text-gray-500 ">
        <div className="btn2"></div>
        <img
          className="animate-bounce"
          src="/images/pdf.svg"
          alt="arrow"
          width={24}
          height={24}
        />
        دانلود روزمه من
      </button>
    </a>
  );
}

export default DownloadResumeButton;
