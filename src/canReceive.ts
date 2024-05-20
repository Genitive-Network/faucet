import redis from "./redis";

type CanReceive = {
  success: boolean;
  message: string;
};

/*
 * Check if the address can transfer. Must wait for cool down to pass
 * @param {string} address - The address to check
 * @returns {CanReceive} - The result of the check
 */
export default async function canReceive(address: string): Promise<CanReceive> {
  // get timestamp in seconds
  const lastReceive = await redis.get<number>(address);
  console.log({lastReceive})
  // if address never been transferred to
  if (lastReceive === null) return { success: true, message: "🚢" };
  // now in seconds
  const now = Math.floor(Date.now() / 1000);
  // coolDown in seconds
  const coolDown = parseInt(process.env.COOLDOWN_HOURS as string) * 60 * 60;
  // if asked for funds after cool down
  if (now >= lastReceive + coolDown) return { success: true, message: "🚢" };
  // calculate time left in hours
  const timeLeft = Math.ceil((lastReceive + coolDown - now) / 60 / 60);
  return {
    success: false,
    message: `Please wait ${timeLeft} hours before requesting again`,
  };
}
