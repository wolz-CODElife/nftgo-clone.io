import React, { useEffect, useState } from 'react';
import { RankHeaderContainer } from './styles/RankHeaderStyles';
import { IconInfo } from '../assets/icons/icons';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import { firstMintCategories, nftCategories, timeCategories } from '../assets/data/TableFilters';
import FilterMenu from './FilterMenu';

const RankHeader = () => {
    const routeName = document.location.pathname.split("/")[2]
    const [tag, setTag] = useState("all")
    const [timespan, setTimeSpan] = useState("24h")
    const [sort, setSort] = useState("marketCap")
    const [firstMint, setFirstMint] = useState("15min")
    const [rarity, setRarity] = useState(true)
    let url = ""

    switch (routeName) {
        case "asset":
            url = `${document.location.origin + document.location.pathname}?tag=${tag}&timespan=${timespan}`
            break;
        case "mint":
            url = `${document.location.origin + document.location.pathname}`
            break;
        case "new":
            url = `${document.location.origin + document.location.pathname}?tag=${tag}&timespan=${timespan}&rarity=${rarity? "true": "false"}`
            break;
        default:
            url = `${document.location.origin + document.location.pathname}?tag=${tag}&timespan=${timespan}&sort=${sort}&rarity=${rarity? "true": "false"}`
            break;
    }
            
    useEffect(() => {
        window.history.pushState({ path: url }, '', url);
    }, [url])

    const routes = [
        {
            title: "Collection",
            route: "collection",
            query: "?tag=all&timespan=24h&sort=marketCap&rarity=false"
        },
        {
            title: "NFT",
            route: "asset",
            query: "?tag=all&timespan=24h"
        },
        {
            title: "Mint",
            route: "mint",
            new: true,
        },
        {
            title: "New",
            route: "new",
            query: "?tag=all&timespan=24h&rarity=false"
        }
    ]

    const onTagChange = (newTag) => {
        setTag(newTag)
    }
    const onTimeSpanChange = (newTimeSpan) => {
        setTimeSpan(newTimeSpan)
    }
    const onRarityChange = (newRarity) => {
        setRarity(newRarity.target.checked)
    }
    const onFirstMintChange = (newFirstMint) => {
        setFirstMint(newFirstMint)
    }

  return (
        <RankHeaderContainer>
            { routeName === "collection" && <>
                <h1>Top Collections</h1>
                <p>Top collections by marketcap and other key indicators. <Link to="/overview">View More</Link></p>
            </>}
            { routeName === "asset" && <>
                <h1>Top NFTs</h1>
                <p>Top NFT sales by last price over the selected time range.</p>
            </>}
            { routeName === "mint" && <>
                <h1>Top Mints</h1>
                <p>Top collections most addresses minted over the selected time range. <Link to="/whale-tracking/mint">View what whales minted.</Link></p>
            </>}
            { routeName === "new" && <>
                <h1>New Collections</h1>
                <p>New collections added to NFTGo recently.</p>
            </>}
            <div className="subheader">
                <div className='links'>
                    {routes.map((route) => (
                    <Link key={route.title} to={`/rank/${route.route}${route.query ? "/" + route.query: ""}`} className={routeName === route.route? "active" : ""}>{route.title} {route.new && <span>New!</span>}</Link>
                    ))}
                </div>
                <div className="filters">
                    {(routeName === "collection" || routeName === "new") &&
                        <div className="filter">
                            <span>Rarity <Tooltip title="Only show collections with rarity" arrow placement='top'><span><IconInfo /></span></Tooltip></span>
                            <Switch checked={rarity} onChange={onRarityChange} />
                        </div>
                    }
                    {(routeName === "mint") &&
                        <div className="filter">
                            <span>Listed <Tooltip title="Only show collections that are listed on NFTGo." arrow placement='top'><span><IconInfo /></span></Tooltip></span>
                            <Switch />
                        </div>
                    }
                    { routeName === "mint" ? 
                    <div className='mint_filter'>
                        {firstMintCategories.map(item => (
                            <button onClick={() => onFirstMintChange(item.tag)} className={firstMint === item.tag ? "active" : ""}>{item.title}</button>
                        ))}
                    </div>
                    :
                    <>
                        <FilterMenu onTagChange={onTagChange} selected={tag} dropdown={nftCategories} />
                        <FilterMenu onTagChange={onTimeSpanChange} selected={timespan} dropdown={timeCategories} />
                    </>}
                </div>
            </div>
        </RankHeaderContainer>
  );
};

export default RankHeader;
