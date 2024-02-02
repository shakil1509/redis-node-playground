// const client=require('./client');
const Redis= require('ioredis');

const client= new Redis();
async function setValue(key, value){
    try{
        client.set(key, value);
    } catch(error){
        console.error("Error setting data to Redis:", error);
    }
}
// expireat accepts unix time in seconds.
await redis.expireat("foo", Math.round(Date.now() / 1000) + 30);
console.log(await redis.ttl("foo")); // a number smaller or equal to 30
setValue("user:4","Himanshu");
async function getValue() {
    try {
      const result = await client.get("user:4");
      console.log("Result->", result);
    } catch (error) {
      console.error("Error fetching data from Redis:", error);
    }
  }
  
  getValue();
