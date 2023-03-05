import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About(props) {
    return (
        <div className={'about'}>
            <div
                className="aboutTop"
                style={{backgroundImage: `url(${MultiplePizzas})`}}
            >
                skdjsdhfjkhsd
            </div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad alias animi aperiam asperiores,
                    assumenda atque aut autem beatae dicta eaque enim est ex expedita fugit inventore iure magnam magni
                    maiores mollitia nam nihil nobis odio perferendis porro possimus quae quasi qui quia quisquam rem
                    rerum saepe sapiente temporibus vitae voluptatibus voluptatum! Corporis dolor et eveniet fugiat,
                    ipsam, laboriosam minus molestias qui quisquam saepe ut voluptas voluptate? Accusantium architecto
                    asperiores corporis deleniti dicta dolorem doloribus est ex explicabo fuga ipsam modi nobis, non
                    quasi, rem sint temporibus vitae. Accusantium atque cumque debitis deleniti dignissimos
                    exercitationem explicabo facere id incidunt, iste laborum minima molestias nemo nobis non nostrum
                    nulla optio quae quos reiciendis reprehenderit saepe tenetur vel veniam voluptates? Commodi
                    explicabo facilis iusto, rerum similique sit ut? Commodi illo illum in itaque iure, laboriosam
                    magnam magni minima molestias, natus necessitatibus nobis quia, recusandae repellat saepe temporibus
                    unde vel. Consectetur, deserunt voluptatibus!
                </p>
            </div>
        </div>
    );
}

export default About;