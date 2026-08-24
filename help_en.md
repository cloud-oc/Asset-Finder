# Resource Search & Review Guide

## What this tool is

Asset Finder Web is a bulk search and review tool for local project resources. It compares the files in an actual project directory with a schedule, upload-status sheet, delivery list, or any other checklist.

Art-asset delivery review is one common use case, but the tool also works well for resource inventory, pre-release checks, outsourcing deliveries, and project-directory cleanup.

The tool compares file names, relative paths, and extensions only. It does not read file contents and does not connect to scheduling systems or upload platforms.

## Recommended workflow

1. **Import the actual directory**: Use the folder button at the top and choose the project directory you want to check.
2. **Prepare a checklist**: Arrange a schedule, upload-status sheet, or delivery record as file name and relative path. You can copy two columns directly from a spreadsheet.
3. **Choose rules**: Select the resource extensions to review and choose a filename matching mode.
4. **Run a bulk check**: Paste the checklist into the query box and click “Run check”. The tool checks each line against the project index.
5. **Review the result**: A listed row means the corresponding file was found in the project directory. A missing row is a candidate for manual review.
6. **Export the record**: Export the plain-text result as supporting material for review or delivery tracking.

## Input format

Write one record per line:

~~~
FileName    Relative/Path
~~~

For example:

~~~
Hero_Knight    Assets/Characters
Stone_A        Assets/Environment/Rocks
~~~

Use multiple spaces or a Tab between the file name and path. Paths may contain nested directories. Enter the name without its extension: `Hero_Knight` can match `Hero_Knight.prefab` or `Hero_Knight.png`.

## Matching modes

- **Exact**: The filename without its extension must match exactly.
- **Prefix**: The filename starts with the query, such as `Stone` matching `Stone_A`.
- **Suffix**: The filename ends with the query, such as `_A` matching `Stone_A`.
- **Keyword**: The query appears anywhere in the filename.
- **Case Sensitive**: Match filename casing exactly.
- **Ignore Spaces**: Handle spacing differences between a checklist and project naming.

If no resource formats are selected, the search does not restrict extensions. To review only selected types, choose the corresponding extensions in the format filter.

## Reading the result

The output lists each file found in the project index with its filename and relative directory. The tool does not generate a full diff report or compare file contents, so these cases still need human review:

- Checklist rows that do not appear in the result;
- Similar but not identical names;
- Unexpected directory levels or delivery versions;
- Files that exist but still require content, version, or upload-status verification.

## Large projects and cancellation

Indexing and searching run in chunks and yield between batches so the browser remains responsive. Progress is based on processed files / total files, with size, rate, and estimated remaining time shown when available.

You can cancel a large import or bulk check. Cancelling an import keeps the previous usable index; cancelling a search keeps the previous result.

## FAQ

- **Why can’t I search after importing?** Make sure indexing has finished and at least one filename matching mode is selected.
- **Why are there fewer results than checklist rows?** Missing rows are usually candidates for manual review of path, filename, extension, or delivery status.
- **Why is the help content empty?** Browsers may block Markdown fetches when the page is opened with `file://`. Run `python -m http.server 8000` in the project folder instead.
- **Which browsers are supported?** Folder selection relies on `webkitdirectory`; Chrome, Edge, and other Chromium browsers are recommended.
