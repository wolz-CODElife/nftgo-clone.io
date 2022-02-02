import { IconMarketData, IconPriceEsimator, IconRanking, IconsAllNfts, IconsArt, IconsAvatar, IconsBlog, IconsCollectibles, IconsDataApi, IconsDefi, IconsDiscord, IconsDocs, IconsDomainName, IconsGame, IconsIp, IconsLand, IconsListingRequest, IconsMetaverse, IconsMusic, IconsNewNfts, IconsPhotography, IconsSocial, IconsSports, IconsUtility } from "../assets/icons/icons";

export const menuList = [
    {
        title: "Analytics",
        dropdown: [
            {
                title: "Ranking",
                icon: <IconRanking />,
                link: "/rank/collection"
            },
            {
                title: "Market Data",
                icon: <IconMarketData />,
                link: "/overview"
            },
            {
                title: "Price Estimator",
                icon: <IconPriceEsimator />,
                link: "coming soon"
            },
        ]
    },
    {
        title: "NFTs",
        link: "/search",
        dropdown: [
            {
                title: "All NFTs",
                icon: <IconsAllNfts />,
                link: "/search"
            },
            {
                title: "New",
                icon: <IconsNewNfts />,
                link: "/search?sort=recentlyCreated"
            },
            {
                title: "Game",
                icon: <IconsGame />,
                link: "/search?tag=game"
            },
            {
                title: "Collectibles",
                icon: <IconsCollectibles />,
                link: "/search?tag=collectibles"
            },
            {
                title: "Avatar",
                icon: <IconsAvatar />,
                link: "/search?tag=avatar"
            },
            {
                title: "Art",
                icon: <IconsArt />,
                link: "/search?tag=art"
            },
            {
                title: "Metaverse",
                icon: <IconsMetaverse />,
                link: "/search?tag=metaverse"
            },
            {
                title: "DeFi",
                icon: <IconsDefi />,
                link: "/search?tag=defi"
            },
            {
                title: "IP",
                icon: <IconsIp />,
                link: "/search?tag=ip"
            },
            {
                title: "Social",
                icon: <IconsSocial />,
                link: "/search?tag=social"
            },
            {
                title: "Music",
                icon: <IconsMusic />,
                link: "/search?tag=music"
            },
            {
                title: "Utility",
                icon: <IconsUtility />,
                link: "/search?tag=utility"
            },
            {
                title: "Land",
                icon: <IconsLand />,
                link: "/search?tag=land"
            },
            {
                title: "Sports",
                icon: <IconsSports />,
                link: "/search?tag=sports"
            },
            {
                title: "Photography",
                icon: <IconsPhotography />,
                link: "/search?tag=photography"
            },
            {
                title: "Domain Name",
                icon: <IconsDomainName />,
                link: "/search?tag=domain_name"
            }
        ]
    },
    {
        title: "Whales",
        link: "/whale-tracking/trade"
    },
    {
        title: "Drops",
        link: "/nft-drops",
    }
    ,
    {
        title: "Resources",
        dropdown: [
            {
                title: "Discord",
                icon: <IconsDiscord />,
                link: "https://discord.gg/38E4sEaFJr"
            },
            {
                title: "Blog",
                icon: <IconsBlog />,
                link: "https://mirror.xyz/nftgoio.eth"
            },
            {
                title: "Docs",
                icon: <IconsDocs />,
                link: "https://docs.nftgo.io/"
            },
            {
                title: "Listing Request",
                icon: <IconsListingRequest />,
                link: "https://docs.nftgo.io/guide/listing-criteria"
            },
            {
                title: "Data API",
                icon: <IconsDataApi />,
                link: "#"
            }
        ]
    }
]