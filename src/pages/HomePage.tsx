import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg border-2 border-slate-400 shadow-lg py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-green-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl font-semibold">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landing-img" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-bold text-3xl tracking-tighter">
                Order takeaway even faster!
            </span>
            <span>
                Download the CraveEase App for faster ordering and personalized recommendations
            </span>
            <img src={appDownloadImage} alt="app-download-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage