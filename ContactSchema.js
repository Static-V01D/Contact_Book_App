export const ContactSchema = {
    name: 'Contact',
    primaryKey: 'id',
    properties: {
      id: 'string',
      name: 'string',
      phone: 'string',
      email: 'string?',
      createdAt: 'date',
    },
  };
  