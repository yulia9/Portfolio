import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Copy from "@/components/Copy";
import SkypeIcon from "@/components/Icons/SkypeIcon";

const contactsData = [
  { title: "SKYPE", data: "yulya_samuilik", icon: <SkypeIcon /> },
  {
    title: "EMAIL",
    data: "usamuilik@gmail.com",
    icon: <EmailIcon />,
  },
  {
    title: "TELEGRAM",
    data: "@usamuilik",
    url: "https://t.me/usamuilik",
    icon: <TelegramIcon />,
  },
  {
    title: "GITHUB",
    data: "https://github.com/yulia9",
    url: "https://github.com/yulia9",
    icon: <GitHubIcon />,
  },
];
const Contacts = () => (
  <main className="sm:flex min-h-screen items-center justify-between p-3 pt-44 sm:pt-24 md:p-24 pr-5 text-wenge">
    <div className="sm:w-1/2 text-5xl sm:text-6xl text-crayola opacity-70 drop-shadow-lg p-5 text-center">
      GET IN TOUCH!
    </div>
    <ul className="sm:w-1/2  pr-5">
      {contactsData.map(({ title, data, url, icon }) => (
        <li key={title} className="p-4 sm:p-7 text-center">
          <div className="text-center font-bold text-tiffany text-lg m-1">
            {icon}
            <span className="ml-1">{title}</span>
          </div>
          {url ? (
            <div className="text-center hover:text-crayola underline underline-offset-1">
              <a target="_blank" href={url}>
                {data}
              </a>
            </div>
          ) : (
            <Copy text={data} />
          )}
        </li>
      ))}
    </ul>
  </main>
);

export default Contacts;
