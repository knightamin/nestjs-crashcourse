import { Body, Controller, Get, Post } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}

  @Get('')
  findAll() {
    return this.songsService.findAll();
  }

  @Post('')
  create(@Body() song: CreateSongDTO) {
    return this.songsService.create(song);
  }
}
