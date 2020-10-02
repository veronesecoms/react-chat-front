export default interface IMessage {
  id: number;
  body: string;
  to_user_id: number;
  from_user_id: number;
  createdAt: Date;
  email: string;
  picture: string;
  first_name: string;
}
