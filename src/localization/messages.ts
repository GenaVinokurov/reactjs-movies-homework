import en from './en.json';
import ru from './ru.json';

type Messages = {
  [key: string]: { [key: string]: string };
};

const messages: Messages = {
  en,
  ru,
};

export default messages;
