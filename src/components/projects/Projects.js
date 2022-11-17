import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';
import project4 from '../images/project4.jpg';

import './projects.css';

export default function Projects() {
    return (
        <div id="projectsWrapper">
            <h1>case studies</h1>
            <div className="vrLine projectsMenu">
                <p className="active">web sites</p>
                <p>brand identity</p>
                <p>mobile apps</p>
                <p>digital products </p>
            </div>

            <div id="webSitesBlock">
                <div className="projectBlock">
                    <img src={project1} alt="project1" />
                    <div className="projectInfo">
                        <p>full cycle creATION</p>
                        <h4>Car rental service</h4>
                        <p>
                            Open repair of infrarenal aortic aneurysm or
                            dissection, plus repair of associated arterial
                            trauma, following unsuccessful endovascular repair;
                            tube prosthesis.
                        </p>
                        <h3>View project</h3>
                    </div>
                </div>
                <div className="projectBlock">
                    <img src={project2} alt="project2" />
                    <div className="projectInfo">
                        <p>web design</p>
                        <h4>Supply chain data platform</h4>
                        <p>
                            Open repair of infrarenal aortic aneurysm or
                            dissection, plus repair of associated arterial
                            trauma, following unsuccessful endovascular repair;
                            tube prosthesis.
                        </p>
                        <h3>View project</h3>
                    </div>
                </div>
                <div className="projectBlock">
                    <div className="projectInfo">
                        <p>admin system development</p>
                        <h4>Streaming platform</h4>
                        <p>
                            Open repair of infrarenal aortic aneurysm or
                            dissection, plus repair of associated arterial
                            trauma, following unsuccessful endovascular repair;
                            tube prosthesis.
                        </p>
                        <h3>View project</h3>
                    </div>
                    <img src={project3} alt="project3" />
                </div>
                <div className="projectBlock">
                    <div className="projectInfo">
                        <p>full cycle development</p>
                        <h4>Fleet management system</h4>
                        <p>
                            Open repair of infrarenal aortic aneurysm or
                            dissection, plus repair of associated arterial
                            trauma, following unsuccessful endovascular repair;
                            tube prosthesis.
                        </p>
                        <h3>View project</h3>
                    </div>
                    <img src={project4} alt="project4" />
                </div>
            </div>
        </div>
    );
}
