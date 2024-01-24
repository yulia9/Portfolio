import { Grid } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const contactsData = [
  { title: "SKYPE", data: "yulya_samuilik"},
  { title: "EMAIL", data: "usamuilik@gmail.com",  icon: <EmailIcon />, },
  { title: "TELEGRAM", data: "@usamuilik", url: 'https://t.me/usamuilik', icon: <TelegramIcon /> },
  {
    title: "GITHUB",
    data: "https://github.com/yulia9",
    url: "https://github.com/yulia9",
    icon: <GitHubIcon />,
  },
];
const Contacts = () => (
  <main className="flex min-h-screen items-center justify-between p-24 pr-5 text-wenge">
    <div className="w-1/2 text-6xl text-crayola opacity-70 drop-shadow-lg pl-5">
      GET IN TOUCH!
    </div>
    <ul className="w-1/2  pr-5">
      {contactsData.map(({ title, data, url, icon }) => (
        <li key={title} className="p-7">
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
            <div className="text-center">{data}</div>
          )}
        </li>
      ))}
    </ul>
  </main>
);

export default Contacts;
