export default function Main() {

  const asciiArt = `
▄▄▄▄·        ▐ ▄ ▄▄▄▄▄▄▄▄ . ▐ ▄ 
▐█ ▀█▪▪     •█▌▐█•██  ▀▄.▀·•█▌▐█
▐█▀▀█▄ ▄█▀▄ ▐█▐▐▌ ▐█.▪▐▀▀▪▄▐█▐▐▌
██▄▪▐█▐█▌.▐▌██▐█▌ ▐█▌·▐█▄▄▌██▐█▌
·▀▀▀▀  ▀█▄▀▪▀▀ █▪ ▀▀▀  ▀▀▀ ▀▀ █▪
`;

  return (
    <div className="main">

      <div className="column">

        <pre>
          {asciiArt}
        </pre>

        <div className="profiles">

          <div className="pfp">
            <div className="pfp-pic-1"></div>
            <h4><span>·</span> Darkov</h4>
            <h5>Admin @Bonten</h5>
            <p>-- socials --</p>
            <div className="socials">
              <a href="http://"><i class="fa-brands fa-discord"></i></a>
              <a href="http://"><i class="fa-brands fa-instagram"></i></a>
            </div>
            
          </div>
          <div className="pfp">
            <div className="pfp-pic-2"></div>
            <h4><span>·</span> Karl</h4>
            <h5>Admin @Bonten</h5>
            <p>-- socials --</p>
            <div className="socials">
              <a href="http://"><i class="fa-brands fa-discord"></i></a>
              <a href="http://"><i class="fa-brands fa-instagram"></i></a>
            </div>
          </div>

        </div>

        <div className="sub">
          <p>The defeat of those who flee from battle is guaranteed.</p>
        </div>

      </div>
      
    </div>
  );
}
