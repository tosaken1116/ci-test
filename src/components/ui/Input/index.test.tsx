import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import { Input } from '.';

describe('ui/Input (text)', () => {
  it('renders placeholder correctly', () => {
    const placeholder = 'Placeholder';

    const screen = render(<Input placeholder={placeholder} />);
    const elem = screen.getByPlaceholderText(placeholder);

    expect(elem).toBeInTheDocument();
  });

  it('allows to type text', async () => {
    const placeholder = 'Placeholder';
    const inputValue = 'Input Value';

    const screen = render(<Input placeholder={placeholder} />);
    const elem = screen.getByPlaceholderText(placeholder);

    await userEvent.type(elem, inputValue);
    expect(elem).toHaveValue(inputValue);
  });

  it('disallows to type text when its disabled', async () => {
    const placeholder = 'Placeholder';
    const inputValue = 'Input Value';
    const defaultValue = 'Default';

    const screen = render(
      <Input placeholder={placeholder} disabled value={defaultValue} />
    );
    const elem = screen.getByPlaceholderText(placeholder);

    await userEvent.type(elem, inputValue);
    expect(elem).toHaveValue(defaultValue);
  });
});

describe('ui/Input (file)', () => {
  it('renders correctly', () => {
    const altText = 'Input Alt Text';

    const screen = render(<Input type="file" alt={altText} />);
    const elem = screen.getByAltText(altText);

    expect(elem).toBeInTheDocument();
  });

  it('allows to upload file correctly', async () => {
    const altText = 'Input Alt Text';
    const baseDir = 'C:\\fakepath\\';
    const file = new File(['text'], 'filename.txt', {
      type: 'text/plain',
    });

    const screen = render(<Input type="file" alt={altText} />);
    const elem = screen.getByAltText(altText);

    await userEvent.upload(elem, file);
    expect(elem).toHaveValue(`${baseDir}${file.name}`);
  });
});
