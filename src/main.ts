import msg from "msg.js";
import { SkyRouter } from "skyrouter";
import superagent from "superagent";
import BrowserInfo from "./BrowserInfo";
import Wallet from "./klaytn/Wallet";
import Classic from "./view/Classic";
import HardFork from "./view/HardFork";
import Home from "./view/Home";
import MintSparrowNFT from "./view/MintSparrowNFT";

(async () => {

    msg.language = BrowserInfo.language;
    msg.parseCSV((await superagent.get("/msg.csv")).text);

    SkyRouter.route("", Home);
    SkyRouter.route("mintnft", MintSparrowNFT);
    //SkyRouter.route("hardpork", HardFork);
    SkyRouter.route("classic", Classic);

    if (sessionStorage.__spa_path) {
        SkyRouter.go(sessionStorage.__spa_path);
        sessionStorage.removeItem("__spa_path");
    }
})();