interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, corporis!", 
      createdAt: Date.now(), 
      status: "pending" 
    },
    {
      description: "En progreso: Laboris et anim quis nostrud non veniam Lorem sit consequat.", 
      createdAt: Date.now() - 1000000, 
      status: "in-progress" 
    },
    {
      description: "Finalizada: Velit eu deserunt commodo sunt ullamco officia commodo sunt excepteur.", 
      createdAt: Date.now() - 100000, 
      status: "finished" 
    },
  ]
}