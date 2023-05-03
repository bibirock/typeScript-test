type A = "唱" | "跳" | "rap";

function kun(value: A) {
  switch (value) {
    case "唱":
      break;
    case "跳":
      break;
    case "rap":
      break;
    default:
      const error: never = value; // 正常情況下不應該執行到這一行，所以將 type 出現未預期的型別時，ts 就會進行報錯
      break;
  }
}
