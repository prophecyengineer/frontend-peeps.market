const { withStoreConfig } = require("./store-config")
const store = require("./store.config.json")

module.exports = withStoreConfig({
  features: store.features,
  reactStrictMode: true,
  optimizeFonts: false,
  images: {
    domains: ["cdn.shopify.com", "bafybeiawkdfubszz22yhqfllcw4llboor2yyvbiakty5i23wdibpoks5du.ipfs.w3s.link", "bafybeiao3cukdtvsgtndshc4fa4qeaw5fp26rgtjzdg4wfbwsen7jid5oa.ipfs.w3s.link", "bafybeih6sl7nyxpnm4morn6gxzrlfdw7oih57v7cg5c7h5itgpvsmbawu4.ipfs.w3s.link", "bafybeihkj6akaazkzdec4vp7e3mvlnk256xhw44zaga7vdr5bqz55cqon4.ipfs.w3s.link", "bafybeid6nif5v3iqkshv27vxga3v2l4ynemt7asvrccmjk4slpxf3x3svy.ipfs.w3s.link", "bafybeie4v4u7rdhqzm7trxuhjd3ok5rra4iwzx7gvjvo4j7mpxqx2cibdu.ipfs.w3s.link", "bafybeicl3bo5okwxcmbbtz4uphapee7wqdvnud2mx7lyry5urp4225wwke.ipfs.w3s.link", "uploads-ssl.webflow.com/638f3688a8461565f917a547", "bafybeigj6uwanlumqfexq4vkybsccnyo6tvc5mi62cioa5wqfiwmbqxote.ipfs.w3s.link", "bafybeidautnulazdfb45bnuretw2w2cp3x7rzy6yuyjxeiyhwimmwbxgmm.ipfs.w3s.link", "bafybeih4kutv76dwzkjwvkoz67tiqtrtav3o7vzp3mivnhmnkktxq7ov4i.ipfs.w3s.link", "ae01.alicdn.com", "ipfs.w3s.link", "cdnb.artstation.com", "images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com", "bafybeiblvakyom45obvnbfskufjldkvepnttoiiy3m5gpdoh36tjalumrq.ipfs.w3s.link", "bafybeif4bthcl6lpvktqpxxgec6v5cyqn2o3cnkam6d4qc56ongiid3pne.ipfs.w3s.link", "bafybeihe5cx2m35dw5r7de5vbqtmak5mukpaprffckgw3f3d57qkety7qe.ipfs.w3s.link", "medusa-public-images.s3.eu-west-1.amazonaws.com", "uploads-ssl.webflow.com", "i.etsystatic.com", "localhost",],
  },
})

console.log("next.config.js", JSON.stringify(module.exports, null, 2))


