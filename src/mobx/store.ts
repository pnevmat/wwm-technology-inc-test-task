import React from 'react';

export interface UsersListType {
	id: string;
	userName: string;
	fullName: string;
	lastLogin: string;
	enabled: boolean;
}

export function createStore() {
	return {
		users: [] as UsersListType[],
		selectedUser: {} as UsersListType | {},
		addUsers(users: UsersListType[]) {
			this.users = users;
		},
		addUser(user: UsersListType) {
			this.users.push(user);
		},
		setSelectedUser(user: UsersListType | undefined) {
			if (user) {
				this.selectedUser = user
			} else {
				this.selectedUser = {}
			};
		}
	};
};

export type Store = ReturnType<typeof createStore>
export const storeContext = React.createContext<Store | null>(null);

