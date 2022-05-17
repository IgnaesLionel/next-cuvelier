const withImages = require("next-images");

module.exports = {
  ...withImages(),
  env: {
    BASE_URL: "http://localhost:3003",
    MONGODB_URL:
      "mongodb+srv://frakzor:1DebianHell1@cluster0.1jdnj.mongodb.net/Cuvelier?retryWrites=true&w=majority",
    ACCESS_TOKEN_SECRET: "Ze5(c'vuhj88hH$<8`&EK?3^S'/[pqM6%:4Rfj=LZZ3xC&_",
    REFRESH_TOKEN_SECRET:
      "Zk(yx4&pxSZV$kyPYmRW>;v!VX9NT^;MzeLk*>Pj4$F94D4<&<C}SNZB&/T<F5D`@5pBqq<<whP%wL",
    PAYPAL_CLIENT_ID:
      "AdqPpNH070_f5WiuGsgJb3ZnuaWp5xFnlBusRJqWwI3gSHZ-odjbQq4tRlQNG4oU2e_9i1ZACJ0RI-wo",
    CLOUD_UPDATE_PRESET: "cuvelier",
    CLOUD_NAME: "dfqoyvi4w",
    CLOUD_API: "https://api.cloudinary.com/v1_1/dfqoyvi4w/image/upload",
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      "pk_test_51JJMJsJZZ9TG6MFrpcrepwakQ5Eu98LFO2ITA52g94znAq5YIgzouHaRU9DqF7QDHemMFg01g24uMrodSFeYfpus00MpPeCqrH",
    STRIPE_SECRET_KEY:
      "sk_test_51JJMJsJZZ9TG6MFrgZUuJIQXspSR5ah2rrsle57cvl8MXE7QG8ztZXPBnYz4yAFJTV8bCAiepOukgZrbYEJc4CMG00jNLrs1q9",
  },
  future: {
    webpack5: true,
  },
};

//#11
