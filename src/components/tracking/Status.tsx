interface StatusProps {
  name: string;
  textColor: string;
  color: string;
}

function Status({ name, textColor, color }: StatusProps) {
  return (
    <p
      className={`text-${textColor} bg-${color} rounded-xl w-40 py-0.5 text-center align-middle text-sm`}
    >
      {name}
    </p>
  );
}
export default Status;
