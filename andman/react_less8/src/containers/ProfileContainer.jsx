import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import React, { Component } from 'react';
// import { connect } from 'react-redux';

// import { Messenger } from 'components/Profile';

import { ProfilePage } from 'pages/Profile';

import { profileLoadAction } from '../actions/profile';

export const ProfileContainer = () => {
    const dispatch = useDispatch();

    const profile = useSelector((state) => state.profile.entries);
    const [isLoading, isError] = useSelector((state) => [state.profile.loading, state.profile.error]);

    useEffect(() => {
        dispatch(profileLoadAction());
    }, []);

    return <ProfilePage profile={profile} isLoading={isLoading} isError={isError} />;
}

// class ProfileContainerClass extends Component {
//     componentDidMount() {
//         const { profileLoadAction } = this.props;
//         profileLoadAction();
//     }

//     render() {
//         const { profile, isLoading, isError } = this.props;

//         return <ProfilePage profile={profile} isLoading={isLoading} isError={isError} />
//     }
// }

// function mapStateToProps(state, ownProps) {

//     const profile = state.profile.entries;

//     return {
//         profile,
//         isLoading: state.profile.loading,
//         isError: state.profile.error,
//     };
// }

// function mapDispatchToProps(dispacth) {
//     return {
//         profileLoadAction: () => dispacth(profileLoadAction()),
//     };
// }

// export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainerClass);