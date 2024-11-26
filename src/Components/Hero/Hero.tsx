/**
 * Hero component displays information about the developer.
 *
 * @component
 * @returns {JSX.Element} The JSX element representing the Hero component.
 */
function Hero(): JSX.Element {
  return (
    <div className="border w-full rounded-2xl p-4 flex flex-col items-center backdrop-blur-sm ">
      <h1 className="font-vazir font-bold border-b-2 border-yellow-400 p-1 text-lg w-full text-center">
        درباره من | About Me
      </h1>

      <div className="mt-3 mb-8 font-vazir">
        <p>سلام 👋</p>
        <p>
          من اسدالله حیدری هستم، برنامه نویس فرانت اند. خوشحالم که این جا هستی
          ❤️
        </p>
        <p>
          اگه دوست داری بیشتر با من آشنا شی و از تجربه های کاری من مطلع شی
          میتونی رزومه منو دریافت کنی.
        </p>
        <p>خوشحال میشم اگه بتونم بهت کمک کنم، پس با من در ارتباط باش. 😉</p>
      </div>

      <div className="mt-3 mb-8 font-vazir" dir="ltr">
        <p>Hello</p>
        <p>
          I am Asadullah Heidari, a front end programmer. I am glad that you are
          here
        </p>
        <p>
          If you want to get to know me more and learn about my work experience,
          you can get my resume.
        </p>
        <p>I will be happy if I can help you, so contact me.</p>
      </div>
    </div>
  );
}

export default Hero;
