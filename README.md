# Pantry Design Tokens
This repository contains design tokens for the Pantry Design System. The design tokens are defined using the [Tokens Studio Figma plugin](https://www.figma.com/community/plugin/843461159747178978/Tokens-Studio-for-Figma-(Figma-Tokens)) and are used to ensure consistent and coherent design throughout Albertsons products.

## Usage
The design tokens in this repository are organized into three layers of abstraction:

1. **Global Tokens**: Global tokens, represented by context-agnostic names, are the primitive values in our design language. They include color palette, animation, typography, and dimension values, and are inherited by all other token types.
2. **Theme Tokens**: Theme tokens are tokens that can be customized for a specific context or abstraction. They serve to communicate the intended purpose of a token and are especially useful for values that appear in multiple places with a single intent. Except for the `disabled` case, they are state-agnostic.
3. **Component Tokens**: This layer includes tokens that are specific to individual components in Albertsons products, such as buttons or cards.

The definitions above are a blend of design token concepts from [Spectrum](https://spectrum.adobe.com/page/design-tokens/) and [Material](https://m3.material.io/foundations/design-tokens/how-to-read-tokens), as well as our own unique approach.

The design tokens in this repository are synced with a local Figma file using the Tokens Studio plugin. This allows designers and developers to reference the same design tokens throughout the design and development process, ensuring consistency and reducing the potential for errors.

## Contributing
If you would like to contribute to the design tokens in this repository, please follow these steps:

Fork the repository and create a new branch for your changes.
Make your changes to the design tokens in your local Figma file, using the Tokens Studio plugin.
Sync your changes to the repository using the Tokens Studio plugin.
Create a pull request with a detailed description of your changes.
All contributions are welcome, but please ensure that any changes you make are consistent with the existing design system and do not introduce any breaking changes.

## License
This repository is licensed under the MIT License. Please see the LICENSE file for more information.
