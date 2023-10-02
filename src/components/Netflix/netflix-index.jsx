import { NetflixHeader } from './netflix-header';
import { NetflixMain } from './netflix-main';
import './netflix-index.css';





export function NetflixIndex(){
    return(
               <div id="body">
                <div id="shade">
                    <NetflixHeader/>
                    <section className="text-white text-center mt-4">
                 <NetflixMain />
                </section>

                </div>


               </div>

    )
}