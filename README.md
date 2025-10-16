# [@tarsislimadev/csv2json](https://github.com/tarsislimadev/csv2json)

A simple and efficient tool to convert CSV files to JSON format.

## Installation

### Using NPX (Recommended)
```bash
npx @tarsislimadev/csv2json input.csv output.json
```

### Using NPM
```bash
npm install -g @tarsislimadev/csv2json
csv2json input.csv output.json
```

### Local Installation
```bash
npm install
npm start input.csv output.json
# or
npm run convert input.csv output.json
```

## Usage

### Command Line
```bash
csv2json <input-file> [output-file]
```

**Parameters:**
- `input-file` (required): Path to the CSV file to convert
- `output-file` (optional): Path for the output JSON file (defaults to `./file.json`)

### Examples

Convert a CSV file to JSON with default output name:
```bash
csv2json data.csv
# Creates file.json
```

Convert a CSV file to JSON with custom output name:
```bash
csv2json data.csv output.json
# Creates output.json
```

Using NPX without installation:
```bash
npx @tarsislimadev/csv2json sales.csv sales.json
```

## Input Format

The tool expects CSV files with:
- Comma-separated values
- First row as headers (column names)
- Windows-style line endings (`\r\n`)

### Example CSV Input:
```csv
name,age,city
John,25,New York
Jane,30,Los Angeles
Bob,35,Chicago
```

## Output Format

The tool generates a JSON array where each object represents a row from the CSV:

### Example JSON Output:
```json
[
    {
        "name": "John",
        "age": "25",
        "city": "New York"
    },
    {
        "name": "Jane",
        "age": "30",
        "city": "Los Angeles"
    },
    {
        "name": "Bob",
        "age": "35",
        "city": "Chicago"
    }
]
```

## Features

- ✅ Simple command-line interface
- ✅ Automatic header detection
- ✅ Pretty-formatted JSON output
- ✅ NPX support for instant usage
- ✅ Cross-platform compatibility

## Requirements

- Node.js (any recent version)

## Scripts

- `npm start` - Run the converter
- `npm run convert` - Alternative command to run the converter
- `npm test` - Placeholder for tests

## License

MIT

## Author

[tarsislimadev](https://github.com/tarsislimadev)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Issues

If you encounter any issues, please report them on the [GitHub Issues page](https://github.com/tarsislimadev/csv2json/issues).