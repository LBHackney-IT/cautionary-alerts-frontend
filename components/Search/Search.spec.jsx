import { render, fireEvent, act } from '@testing-library/react';
import { getResidents } from 'utils/api/residents';
import Search from './Search';

jest.mock('utils/api/residents', () => ({
  getResidents: jest.fn(),
}));

describe('Search component', () => {
  it('should show load more button on successful search', async () => {
    const { getByRole, getByLabelText, queryByText } = render(<Search />);
    const firstNameInput = getByLabelText('First name:');
    fireEvent.change(firstNameInput, { target: { value: 'foo' } });
    expect(queryByText('load more')).not.toBeInTheDocument();
    getResidents.mockImplementation(() =>
      Promise.resolve({
        residents: [
          {
            tenancyReference: '23223232',
            firstName: 'foo',
            lastName: '',
          },
        ],
        nextCursor: 'foo',
      })
    );
    await act(async () => {
      fireEvent.submit(getByRole('form'));
    });
    expect(queryByText('load more')).toBeInTheDocument();
  });
});
