export interface Content {
  name: string;
}

export const getContent = (): Content => ({
  name: 'Name of There',
});

export default () => 'Content!';
