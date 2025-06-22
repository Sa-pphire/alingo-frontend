import Image from "next/image";
import CharacterIllustration from '../components/characters';

export default function Home() {
  return (
    <div >
      {/* Logo */}
      <div className="absolute top-2 left-6 z-20">
        <Image
          src="/images/logo.png"
          alt="Alingo logo"
          width={224}
          height={64}
          className="w-36 md:w-56 h-auto"
          priority
        />
      </div>

      {/* Hero Section */}
      <section className="text-center mt-10 px-4 pt-28 pb-10 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
          Your Gateway To Learn African Languages
        </h1>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 relative inline-block">
          In A{" "}
          <span className="relative inline-block">
            Fun Way
            <Image
              src="/images/line.png"
              alt="Underline"
              width={300}
              height={20}
              className="absolute left-0 -bottom-4 w-full pointer-events-none h-auto"
              priority
            />
          </span>
        </h2>

        <p className="mt-4 mx-auto text-lg sm:text-xl md:text-2xl max-w-2xl">
          Catch the vibe, speak the tribe, learning African languages just got
          lit!
        </p>

        {/* Form */}
        <form id="userForm">
          <div className="mt-6 flex justify-center">
            <div className="flex flex-nowrap w-full max-w-md">
              <input
                type="email"
                name="email"
                placeholder="EMAIL ADDRESS"
                className="flex-grow text-xs sm:text-sm px-3 py-2 rounded-l-2xl text-white bg-transparent border border-white border-r-0"
              />
              <button
                type="submit" className="px-3 sm:px-4 py-2 text-xs sm:text-sm text-white font-semibold bg-green-800 hover:bg-green-700 rounded-r-2xl whitespace-nowrap"
              >
                JOIN THE WAITLIST
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* Illustrations Section */}
      <section>
        {/* Mobile view */}
        <div className="sm:hidden flex items-end pt-4">
          <Image
            src="/images/woman.png"
            alt="Character Left"
            width={96}
            height={150}
            className="w-3/12 h-auto"
          />
          <Image
            src="/images/screen.png"
            alt="Experience Screen"
            width={288}
            height={300}
            className="w-3/4 shadow-lg h-auto"
          />
        </div>

        {/* Desktop view */}
        <div className="hidden sm:flex justify-center gap-4 flex-wrap relative mt-8 px-4 md:px-8 lg:px-12">
          <CharacterIllustration />
          <Image
            src="/images/screens.png"
            alt="App Screens"
            width={800}
            height={600}
            className="shadow-lg w-full max-w-xl sm:max-w-2xl md:max-w-xl lg:max-w-4xl h-auto"
          />
        </div>
      </section>

      <script src="/js/formHandler.js"></script>
    </div>
  );
}
