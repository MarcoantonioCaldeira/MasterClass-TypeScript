import React from 'react';

interface IUser {
    nome: string;
    email?: string;
}

interface Props {
    user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
    <div>
        <strong>Nome: </strong> {user.nome} <br / >
            <strong>E - mail: </strong> {user.email || 'Não possui e-mail'} <br / >
                </div>
};

export default User;