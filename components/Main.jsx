export default function Main() {

  const asciiArt = `
     ____              _               _____                       _   
    |  _ \            | |             |  __ \                     | |  
    | |_) | ___  _ __ | |_ ___ _ __   | |__) |___ _ __   ___  _ __| |_ 
 -- |  _ < / _ \| '_ \| __/ _ \ '_ \  |  _  // _ \ '_ \ / _ \| '__| __| --
    | |_) | (_) | | | | ||  __/ | | |_| | \ \  __/ |_) | (_) | |  | |_ 
    |____/ \___/|_| |_|\__\___|_| |_(_)_|  \_\___| .__/ \___/|_|   \__|
                                                 | |                   
                                                 |_|                   
                    `;

  return (
    <div className="main">
      <div className="background">

        {/* orta xet */}
        <div className="row">

          {/* ascii art ucun bolme */}
          <div className="text-row">
            {asciiArt}
          </div>

          {/* admin profilleri ucun bolme */}
          <div className="users-row">

            {/* admin profillerinin merkez hissesi */}
            <div className="users">

              {/* admin profilleri */}
              <div className="profiles">

                {/* darkov user */}
                <div className="admin">
                  <div className="pfp1"></div>
                  <p className="admin-name"><span>- </span>Darkov</p>
                  <p className="admin-authority">admin @bonten</p>
                  <p className="admin-socials">--socials--</p>

                  <div className="social">
                    <a href="https://discord.com/" target="_black"><i class="fa-brands fa-discord"></i></a>
                    <a href="https://telegram.com/" target="_blank"><i class="fa-solid fa-paper-plane"></i></a>
                    <a href="#"><i class="fa-solid fa-user-secret"></i></a>
                  </div>
                </div>

                {/* karl user */}
                <div className="admin">
                  <div className="pfp2"></div>
                  <p className="admin-name"><span>- </span>Darkov</p>
                  <p className="admin-authority">admin @bonten</p>
                  <p className="admin-socials">--socials--</p>

                  <div className="social">
                    <a href="https://discord.com/" target="_black"><i class="fa-brands fa-discord"></i></a>
                    <a href="https://telegram.com/" target="_blank"><i class="fa-solid fa-paper-plane"></i></a>
                    <a href="#"><i class="fa-solid fa-user-secret"></i></a>
                  </div>
                </div>

              </div>

              {/* aciqlama hissesi */}
              <div className="about">
                <p className="napoleon">The defeat of those who flee from battle is guaranteed.</p>
                <p className="advertisement">our owneds</p>
                <p className="domain"><a href="#">| bonten.com |</a></p>
                <p className="hint">...</p>
              </div>


            </div>

          </div>

        </div>

        
      </div>
    </div>
  );
}
