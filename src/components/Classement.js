import React from 'react';
import botolaClassement from '../Botolapro_classement.json';

const Classement = () => {
    return (
        <div className="page-container">
            <div className="table-container">
                <h1 className="header-title">Classement</h1>
                <table className="botola-table">
                    <thead>
                        <tr>
                            <th>Équipe</th>
                            <th></th>
                            <th>Pts</th>
                            <th>MJ</th>
                            <th>G</th>
                            <th>N</th>
                            <th>P</th>
                            <th>BP</th>
                            <th>BC</th>
                        </tr>
                    </thead>
                    <tbody>
                        {botolaClassement.map(team => (
                            <tr key={team.id}>
                                <td>{team.id}</td>
                                <td>{team.equipe}</td>
                                <td>{team.pts}</td>
                                <td>{team.mj}</td>
                                <td>{team.gagne}</td>
                                <td>{team.nul}</td>
                                <td>{team.perdus}</td>
                                <td>{team.bp}</td>
                                <td>{team.bc}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Classement;
