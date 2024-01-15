import { Controller, Get, Param } from '@nestjs/common';

@Controller('articles')
export class ArticlesController {
  // @Get(':slug')
  // findArticle(@Param() params) {
  //   return `Article body for '${params.slug}'`;
  // }

  @Get(':slug')
  findArticle(@Param('slug') slug: string) {
    return `Article body for '${slug}'`;
  }
}
