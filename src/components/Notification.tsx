import classes from "./Notification.module.css";

export type Status = "success" | "error" | "pending";

function Notification(props: {
  title: string;
  message: string;
  status: "success" | "error" | "pending";
  onClick?: () => void;
}) {
  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={props.onClick}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
