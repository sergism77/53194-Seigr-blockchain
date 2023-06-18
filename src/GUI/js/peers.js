
const { Peer, PeerList, PeerListItem } = require("./peer");
const { PeerPool } = require("./peerPool");
const { PeerPoolDirectory } = require("./peerPoolDirectory");
const { PeerPoolManager } = require("./peerPoolManager");

//this is the peerPoolManager.
const peerPoolManager = new PeerPoolManager();

//this is the peerPoolDirectory.
const peerPoolDirectory = peerPoolManager.getPeerPoolDirectory();

//this is the peerPool.
const peerPool = new PeerPool();

//this is the peerList.
const peerList = peerPoolManager.getPeerList();

//this is the peerPoolDirectoryList.
const peerPoolDirectoryList = peerPoolDirectory.getPeerPoolDirectory();

//this is the peerPoolList.
const peerPoolList = peerPool.getPeerPool();

//this is the peerPoolDirectoryListElement.
const peerPoolDirectoryListElement = document.getElementById("peerPoolDirectoryList");

//this is the peerPoolListElement.
const peerPoolListElement = document.getElementById("peerPoolList");
