import { defineStore } from "pinia";

export const useFilmStore = defineStore("film", {
    state: () => ({
        films: [
            {
                photoUrl: "https://i.pravatar.cc/150?u=a042581f4e2902ds04d",
                name: "Alex Smith",
                unviewedFilmCount: 4,
                hasUnviewedFilm: true,
            },
            {
                photoUrl: "https://i.pravatar.cc/150?u=3a4b3d205c24cd9",
                name: "Emma Johnson",
                unviewedFilmCount: 0,
                hasUnviewedFilm: false,
            },
            {
                photoUrl: "https://i.pravatar.cc/150?u=9e5ba023f470a28",
                name: "John Doe",
                unviewedFilmCount: 2,
                hasUnviewedFilm: true,
            },
            {
                photoUrl: "https://i.pravatar.cc/150?u=59b7cc4a2711b92",
                name: "Sophia Williams",
                unviewedFilmCount: 2,
                hasUnviewedFilm: true,
            },
            {
                photoUrl: "https://i.pravatar.cc/150?u=b198b97e4c2e2a1",
                name: "Daniel Brown",
                unviewedFilmCount: 0,
                hasUnviewedFilm: false,
            },
            {
                photoUrl: "https://i.pravatar.cc/150?u=1c97a43e2207db9",
                name: "Olivia Miller",
                unviewedFilmCount: 4,
                hasUnviewedFilm: true,
            },
            {
                photoUrl: "https://i.pravatar.cc/150?u=c6e4a6ed854c18c",
                name: "William Martinez",
                unviewedFilmCount: 0,
                hasUnviewedFilm: false,
            },
            {
                photoUrl: "https://i.pravatar.cc/150?u=76e4a9bc1a6f86e",
                name: "Ava Davis",
                unviewedFilmCount: 1,
                hasUnviewedFilm: true,
            },
        ],
    }),
});
