import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import List from "./List";
import { QueryClient, QueryClientProvider } from "react-query";
import { FetchingData } from './List';
import { renderHook, act } from '@testing-library/react-hooks';

const client = new QueryClient();

describe("List", () => {
  it("renders a without crashing", () => {
    const component = render(
      <QueryClientProvider client={client}>
        <List />
      </QueryClientProvider>
    );
    expect(component).toBeTruthy();
  });
  it('should be a function', () => {
    expect(typeof FetchingData).toBe('function');
  });

});

describe('useForm', () => {
  describe('tests', () => {

    describe('validateField', () => {
      describe('required', () => {
        it("should return a default error message for fields that don't have a value", () => {
          const { result } = renderHook(() => FetchingData({
            validations: {
              name: {
                required: true,
              },
              url: {
                required: true
              }
            },
          }));

          expect(result.current.validateField('name', 'url')).toBe('required');
        });

        it('should return a custom error message', () => {
          const { result } = renderHook(() => FetchingData({
            validations: {
              name: {
                required: 'the field "name" is required',
              },
              url: {
                required: 'the field "url" is required',
              },
            },
          }));

          expect(result.current.validateField('name', 'url')).toBe('the field "name" is required');
        });
      });
    })
  })
})